import React from "react"

export default function Loader({ text = "Cargando..." }) {
    return (
        <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status" />
            <p className="mt-2">{text}</p>
        </div>
    )
}
