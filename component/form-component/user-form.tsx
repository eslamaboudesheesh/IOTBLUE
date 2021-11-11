import React, { useEffect, useState } from 'react'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { FormControl, FormGroup, FormLabel, FormText, Button, Card } from 'react-bootstrap';
import { AddUserInfo } from '../../lib/services/add-user';
import { useDispatch } from 'react-redux';
import { showAddUserDetailsMessage } from '../../redux/actions/UsersAction';
import { MyFormValues } from '../../types';


function UserForm() {


  const dispatch = useDispatch()
  const [Message, setMessege] = useState('')
  const [alertStyle, setalertStyle] = useState('')

  useEffect(() => {

    dispatch(showAddUserDetailsMessage({ Message, alertStyle }));

  }, [Message, alertStyle, dispatch])
  const initialValues: MyFormValues = {
    firstName: '',
    lastName: '',
    email: '',
  };
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const submitHandler = (values: MyFormValues, { resetForm }: any) => {

    AddUserInfo(values, (res: any) => {
      if (res) {
        if (!res.error) {
          setMessege('User Created Successfully')
          setalertStyle('alert-success')
          setTimeout(() => {
            resetForm()
          }, 1000)

        } else {
          setMessege(res.data.email)
          setalertStyle('alert-danger')

        }
      }
    })
  }


  return (
    <>

      <Card className="card-form col-md-6">
        <Card.Header>Create New User</Card.Header>
        <Card.Body>

          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}

            onSubmit={submitHandler}
          >
            {({ errors, touched }) => (
              <Form>


                <FormGroup className="mb-3" controlId="formBasicFirstName">
                  <FormLabel>First Name</FormLabel>
                  <Field name="firstName" className="form-control" />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicLastName">
                  <FormLabel>Last Name</FormLabel>
                  <Field name="lastName" className="form-control" />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger"
                  />

                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicFirstEmail">
                  <FormLabel> Email </FormLabel>
                  <Field name="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                  <FormText className="text-muted">
                    We will never share your email with anyone else.
                  </FormText>
                </FormGroup>



                <Button className="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}

          </Formik>
        </Card.Body>

      </Card>



    </>
  );
}

export default UserForm
