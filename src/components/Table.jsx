import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useAppContext } from "../AppContext";

const colorMap = {
  movie: "#BC7C7C",
  series: "#659287",
  episode: "#A2D2DF",
};

const columns = [
  {
    field: "imdbID",
    headerName: "IMDb ID",
    width: 130,
    sortable: false,
    resizable: false,
  },
  {
    field: "Title",
    headerName: "Name",
    width: 800,
    sortable: false,
    resizable: false,
  },
  {
    field: "Year",
    headerName: "Year",
    width: 130,
    type: "number",
    sortable: false,
    resizable: false,
  },
  {
    field: "Type",
    headerName: "Type",
    width: 130,
    sortable: false,
    resizable: false,
    renderCell: (params) => {
      return (
        <Chip
          label={
            params?.row?.Type
              ? params.row.Type[0].toUpperCase() + params.row.Type.substring(1)
              : ""
          }
          sx={{
            backgroundColor: colorMap[params?.row?.Type] || "#021526",
            color: "white",
          }}
        />
      );
    },
  },
];

export default function Table() {
  const navigate = useNavigate();

  const paginationModel = { page: 0, pageSize: 10 };
  const { rows, loading, totalRows, setPage } = useAppContext();

  const handleRowClick = (e) => {
    navigate(`/movies/${e.id}`);
  };

  return (
    <Paper>
      <DataGrid
        sx={{
          "& .MuiDataGrid-row": {
            cursor: "pointer",
          },
        }}
        rows={rows}
        getRowId={(row) => row.imdbID}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10]}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        loading={loading}
        pagination
        paginationMode="server"
        rowCount={Number(totalRows)}
        pageSize={10}
        onPaginationModelChange={(newPage) => {
          setPage(newPage?.page + 1);
        }}
        onRowClick={handleRowClick}
      />
    </Paper>
  );
}
