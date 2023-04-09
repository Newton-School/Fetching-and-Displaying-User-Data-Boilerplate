import React, { useState, useEffect } from "react";

function UserTable(props) {
    const {id, name, email, phone, website} = props.user;
    return(
        <>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
        </>
    )
}

export default UserTable;
