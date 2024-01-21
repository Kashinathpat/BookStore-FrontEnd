import React from "react";
import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import ViewBook from "./pages/ViewBook.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/edit/:id", element: <UpdateBook /> },
	{ path: "/create", element: <CreateBook /> },
	{ path: "/delete/:id", element: <DeleteBook /> },
	{ path: "/view/:id", element: <ViewBook /> }
]);

function App() {
	return (
		<SnackbarProvider>
			<RouterProvider router={router} />
		</SnackbarProvider>
	);
}
export default App;
