import { Card, CardContent, Typography } from "@blueprintjs/core";
import React from "react";
import GenericForm from "src/components/common/GenericForm";
import store from "src/store";
import * as Yup from "yup";
import PageWrapper from "src/components/common/PageWrapper";


const validationSchema = Yup.object().shape({
  title: Yup.string().label("Title").required(),
  body: Yup.string().label("Body").required(),
});

const uiSchema = {
  body: "textarea",
};

const extraProps = {
  title: { autoComplete: "off" },
  body: { autoComplete: "off" },
};

const initialValues = {
  title: "",
  body: "",
};

const onSubmit = (values, actions) => {
  return store.postArticle(values.title, values.body);
};

const CustomForm = () => {
  return (
    <PageWrapper>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Create Post
          </Typography>
          <GenericForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            uiSchema={uiSchema}
            extraProps={extraProps}
          />
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export default CustomForm;
