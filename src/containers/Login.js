import React, { Component } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { authenticateUser } from "../actions/authorization";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';

class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleSubmit = () => {
    const { state } = this.props.location;
    const redirectUrl = state ? state.from.pathname : "/";
    const auth = this.props.authenticateUser(this.state.account, redirectUrl);
    if (auth !== false){
      this.props.history.push(redirectUrl)
    }    
    this.setState({
      account: {
        username: "",
        password: ""
      }
    });
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
        <h1>Login</h1>
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
                  Login
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

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticateUser: authenticateUser,
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Login));
