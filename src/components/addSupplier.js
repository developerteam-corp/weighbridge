import React, { Component } from "react";
import { Form, Button, Row, Col, Input, DatePicker } from "antd";
import { addSupplier, addSupplierFormData } from "../redux/actions";
import { connect } from "react-redux";

const { TextArea } = Input;
const dateFormat = "DD/MM/YYYY";
class AddSupplier extends Component {
  idGenerator = () => {
    return Math.random()
      .toString(36)
      .substr(2, 13);
  };
  handleDobDateChange = (date, dateString) => {
    this.props.addSupplierFormData({
      name: "dob",
      value: dateString
    });
  };
  handleSpouseDobDateChange = (date, dateString) => {
    this.props.addSupplierFormData({
      name: "spousedob",
      value: dateString
    });
  };
  handleLicenseDateChange = (date, dateString) => {
    this.props.addSupplierFormData({
      name: "licenseexpirydate",
      value: dateString
    });
  };
  handleChange = e => {
    this.props.addSupplierFormData({
      name: e.target.name,
      value: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addSupplier({
      id: this.idGenerator(),
      data:this.props.formData
    });
  };

  render() {
    return (
      <div>
        <div className="dashboard">Add Supplier</div>
        <div className="input-entry-form">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Supplier Name</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="name"
                  maxLength={40}
                  placeholder="Please enter the supplier name"
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">IC</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={5} xl={5}>
                <Input
                  type="text"
                  name="ic"
                  maxLength={14}
                  placeholder="Please enter the IC"
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">DOB</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <DatePicker
                  onChange={(date, dateString) =>
                    this.handleDobDateChange(date, dateString)
                  }
                  format={dateFormat}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Address 1</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <TextArea
                  name="address1"
                  placeholder="Address"
                  maxLength={40}
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Address 2</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <TextArea
                  name="address2"
                  placeholder="Address"
                  maxLength={40}
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Poskod</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={5} xl={5}>
                <Input
                  type="text"
                  name="poskod"
                  maxLength={5}
                  placeholder="Please enter the poskod"
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Phone</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={5} xl={5}>
                <Input
                  type="number"
                  name="phoneno"
                  placeholder="Please enter the phone no"
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Race</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={2} xl={2}>
                <Input
                  type="text"
                  name="race"
                  maxLength={1}
                  placeholder="Race"
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Sex</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={2} xl={2}>
                <Input
                  type="text"
                  name="sex"
                  placeholder="Sex"
                  maxLength={1}
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Spouse</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="spousename"
                  maxLength={40}
                  placeholder="Please enter the spouse name"
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">DOB</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <DatePicker
                  onChange={(date, dateString) =>
                    this.handleSpouseDobDateChange(date, dateString)
                  }
                  format={dateFormat}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">License</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="licenseno"
                  maxLength={14}
                  placeholder="Please enter the license no"
                  onChange={e => this.handleChange(e)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Expiry Date</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <DatePicker
                  onChange={(date, dateString) =>
                    this.handleLicenseDateChange(date, dateString)
                  }
                  format={dateFormat}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  formData: state.addSupplier.formData
});
const mapDispatchToProps = dispatch => ({
  addSupplier: payload => dispatch(addSupplier(payload)),
  addSupplierFormData: data => dispatch(addSupplierFormData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSupplier);
