import React, { Component } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { SignUp } from "../actions/authorization";
import { withRouter } from "react-router-dom";

class Signup extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleSubmit = () => {
    this.props.createUser(this.state.account);
    const { state } = this.props.location;
    const redirectUrl = state ? state.from.pathname : "/";
    this.props.history.push(redirectUrl)
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account
    });
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  label="Username"
                  name="username"
                  value={this.state.account.username}
                  onChange={this.handleChange}
                />

                <Form.Input
                  label="Password"
                  type="password"
                  name="password"
                  value={this.state.account.password}
                  onChange={this.handleChange}
                />

                <Button type="submit" primary>
                  Signup
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createUser: SignUp,
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Signup));
