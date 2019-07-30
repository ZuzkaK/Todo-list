import React, { Component } from "react";

export default class TodoInput extends React.Component {
    render() {
        const { item, handleChange } = this.props
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="Add another todo item" value={item} onChange={handleChange}></input>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3">
                        Add item
                    </button>
                </form>
            </div>
        )
    }
}
