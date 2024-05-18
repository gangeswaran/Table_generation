// import React, { useState } from "react";
// import "../../styles/table.css"; 

// function Table() {
//     const [rows, setRows] = useState(0);
//     const [cols, setCols] = useState(0);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newRow = parseInt(e.target.row.value);
//         const newCol = parseInt(e.target.col.value);
//         if (!isNaN(newRow) && !isNaN(newCol)) {
//             setRows(newRow);
//             setCols(newCol);
//         }
//     };

//     // const generateTable = () => {
//     //     const tableRows = [];
//     //     let cellNumber = 1;
//     //     for (let i = 0; i < rows; i++) {
//     //         const rowCells = [];
//     //         for (let j = 0; j < cols; j++) {
//     //             rowCells.push(<td key={j}>{cellNumber++}</td>);
//     //         }
//     //         tableRows.push(<tr key={i}>{rowCells}</tr>);
//     //     }
//     //     return (
//     //         <table className="generated-table">
//     //             <tbody>{tableRows}</tbody>
//     //         </table>
//     //     );
//     // };
//     const generateTable = (rows, cols) => {
//         let cellNumber = 1;
        
//         const tableRows = Array.from({ length: rows }).map((_, rowIndex) => {
//             const rowCells = Array.from({ length: cols }).map((_, colIndex) => (
//                 <td key={colIndex}>{cellNumber++}</td>
//             ));
//             return <tr key={rowIndex}>{rowCells}</tr>;
//         });
    
//         return (
//             <table className="generated-table">
//                 <tbody>{tableRows}</tbody>
//             </table>
//         );
//     };

//     return (
//         <div className="container">
//             <h1 className="title">Table Generation</h1>
//             <form onSubmit={handleSubmit} className="form">
//                 <label>Rows:</label>
//                 <input type="number" name="row" />
//                 <label>Columns:</label>
//                 <input type="number" name="col" />
//                 <button type="submit">Generate Table</button>
//             </form>
//             {rows > 0 && cols > 0 && generateTable()}
//         </div>
//     );
// }

// export default Table;

import React, { useState } from "react";
import "../../styles/table.css"; 

function Table() {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRow = parseInt(e.target.row.value);
        const newCol = parseInt(e.target.col.value);
        if (!isNaN(newRow) && !isNaN(newCol)) {
            setRows(newRow);
            setCols(newCol);
        }
    };

    const generateTable = (rows, cols) => {
        let cellNumber = 1;
        
        const tableRows = Array.from({ length: rows }).map((_, rowIndex) => {
            const rowCells = Array.from({ length: cols }).map((_, colIndex) => (
                <td key={colIndex}>{cellNumber++}</td>
            ));
            return <tr key={rowIndex}>{rowCells}</tr>;
        });
    
        return (
            <table className="generated-table">
                <tbody>{tableRows}</tbody>
            </table>
        );
    };

    return (
        <div className="container">
            <h1 className="title">Table Generation</h1>
            <form onSubmit={handleSubmit} className="form">
                <label>Rows:</label>
                <input type="number" name="row" min="0" />
                <label>Columns:</label>
                <input type="number" name="col" min="0" />
                <button type="submit">Generate Table</button>
            </form>
            {rows > 0 && cols > 0 && <h6>Wow You smashed It!!!</h6>}
            {rows > 0 && cols > 0 && generateTable(rows, cols)}
            {rows <= 0 && cols <= 0 && <p>Please enter a valid number of rows and columns.</p>}
        </div>
    );
}

export default Table;
