import React, { Component } from 'react';
import { register } from './UserFunction'

export default class Register extends Component {
    constructor() {
        super()

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            level: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            level: this.state.level
        }

        register(user).then(res => {
            this.props.history.push('/login')
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form action="" onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="first_name" className="form-control"
                                    name="first_name"
                                    placeholder="Enter Your First Name"
                                    required
                                    value={this.state.first_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="last_name" className="form-control"
                                    name="last_name"
                                    placeholder="Enter Your Last Name"
                                    required
                                    value={this.state.last_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Addres</label>
                                <input type="email" className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    required
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    required
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="level">Level</label>
                                <input type="level" className="form-control"
                                    name="level"
                                    placeholder="Choose Your Level"
                                    required
                                    value={this.state.level}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                           </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}