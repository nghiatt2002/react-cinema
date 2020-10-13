import React, { Component } from 'react'

export default class Account extends Component {

    state = {
        values : {
            email : '',
            matKhau : '',
            reMMmatKhau : '',
        },
        errors : {
            email : '',
            matKhau : '',
            reMMmatKhau : '',
        }
    }

    handleChange = (event)=>{
        let {name, value} = event.target;

        let newValue = {...this.state.values, [name]: value};

        let label = event.target.getAttribute('label');
        let type = event.target.getAttribute('type');

        let errorMess = '';
        if (value.trim() === ''){
            errorMess = `${label} không được bỏ trống!`;
        } 
        else {
            console.log(value);
            console.log(this.state.values.matKhau);
            if (type === 'email') {
                const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regexEmail.test(value)) {
                    errorMess = `${label} không hợp lệ!`;
                }
            }
            if (name === 'reMMmatKhau') {
                if (value != this.state.values.matKhau) {
                    errorMess = `${label} không trùng khớp!`;
                }
            }
        }

        let newErrors = {...this.state.errors, [name]: errorMess};

        this.setState({
            values : newValue,
            errors : newErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        let {values, errors} = this.state;
        for (let key in values) {
            if (values[key].trim() === '') {
                alert("dữ liệu không hợp lệ");
                return;
            }
        }
        for (let key in errors) {
            if (errors[key].trim() !== '') {
                alert("dữ liệu không hợp lệ");
                return;
            }
        }

        this.props.dispatch({
            type: "THEM_ND", 
            nguoiDung: this.state.values,
        });
    } 
    
    render() {
        return (
            <div className="modal fade" id="modalLRForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-c-tabs">
                            <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabLogin" role="tab"><i className="fas fa-user mr-1" />Đăng Nhập</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabRegister" role="tab"><i className="fas fa-user-plus mr-1" />Đăng Ký</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade in show active" id="tabLogin" role="tabpanel">
                                    <div className="modal-body mb-1">
                                        <div className="md-form form-sm mb-5">
                                            <i className="fas fa-envelope prefix" />
                                            <label data-error="wrong" data-success="right" htmlFor="modalLRInput10">Email</label>
                                            <input type="email" label="Email" id="modalLRInput10" className="form-control form-control-sm validate" name="email" onChange={this.handleChange} />
                                            <p className="text text-danger">{this.state.errors.email}</p>
                                        </div>
                                        <div className="md-form form-sm mb-4">
                                            <i className="fas fa-lock prefix" />
                                            <label data-error="wrong" data-success="right" htmlFor="modalLRInput11">Mật Khẩu</label>
                                            <input type="password" label="Mật Khẩu" id="modalLRInput11" className="form-control form-control-sm validate" name="matKhau" onChange={this.handleChange} />
                                            <p className="text text-danger">{this.state.errors.matKhau}</p>
                                        </div>
                                        <div className="text-center mt-2">
                                            <button className="btn btn-info">Đăng Nhập<i className="fas fa-sign-in ml-1" /></button>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="options text-center text-md-right mt-1">
                                            <a href="#" className="blue-text">Quên Mật Khẩu</a>
                                        </div>
                                        <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Đóng</button>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tabRegister" role="tabpanel">
                                    <div className="modal-body">
                                        <div className="md-form form-sm mb-5">
                                            <i className="fas fa-envelope prefix" />
                                            <label data-error="wrong" data-success="right" htmlFor="modalLRInput12">Email</label>
                                            <input type="email" label="Email" id="modalLRInput12" className="form-control form-control-sm validate" name="reEmail" onChange={this.handleChange}  />
                                            <p className="text text-danger">{this.state.errors.reEmail}</p>
                                        </div>
                                        <div className="md-form form-sm mb-5">
                                            <i className="fas fa-lock prefix" />
                                            <label data-error="wrong" data-success="right" htmlFor="modalLRInput13">Mật Khẩu</label>
                                            <input type="password" label="Mật Khẩu" id="modalLRInput13" className="form-control form-control-sm validate" name="reMatKhau" onChange={this.handleChange}  />
                                            <p className="text text-danger">{this.state.errors.reMatKhau}</p>
                                        </div>
                                        <div className="md-form form-sm mb-4">
                                            <i className="fas fa-lock prefix" />
                                            <label data-error="wrong" data-success="right" htmlFor="modalLRInput14">Nhập Lại Mật Khẩu</label>
                                            <input type="password" label="Mật Khẩu" id="modalLRInput14" className="form-control form-control-sm validate" name="reMMmatKhau" onChange={this.handleChange}  />
                                            <p className="text text-danger">{this.state.errors.reMMmatKhau}</p>
                                        </div>
                                        <div className="text-center form-sm mt-2">
                                            <button className="btn btn-info">Đăng Ký <i className="fas fa-sign-in ml-1" /></button>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Đóng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
