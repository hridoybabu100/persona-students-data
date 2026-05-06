"use client";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const StudentsAdd = () => {

    const onSubmit = async(e) => {
        e.preventDefault();
        // console.log('target',e);

        const formdata = new FormData(e.target);
        const newStudents = Object.fromEntries(formdata.entries());
        // console.log("New Students ", newStudents);


        const res = await fetch("http://localhost:1200/students",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(newStudents)
        })

        const createStudents = await res.json();
        // console.log('Created a student', createStudents);
        if(createStudents.success){
            alert("Student added successfully");
            redirect('/students')
        }
        
        
    }
    return (
        <div className="w-[30%] mx-auto shadow-lg my-10 p-6">
            <h2 className="text-3xl font-bold my-4">Enter a New Add Members </h2>
              <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField isRequired name="phone" type="phone">
            <Label>Phone</Label>
            <Input placeholder="01601015045" />
            <FieldError />
          </TextField>
          
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Create New Students
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default StudentsAdd;