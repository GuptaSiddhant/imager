import { Form } from "@remix-run/react";

export default function CatchAll() {
  return (
    <Form
      action="/social"
      reloadDocument
      target="_blank"
      style={{
        margin: "0 auto",
        width: "max-content",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <fieldset
        style={{
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          fontFamily: "sans-serif",
          width: "auto",
        }}
      >
        <legend style={{ textAlign: "center", fontWeight: "bold" }}>
          Social Image
        </legend>

        <label>
          <span>Title </span>
          <input type="text" name="title" required />
        </label>
        <label>
          <span>Caption </span>
          <input type="text" name="caption" />
        </label>
        <label>
          <span>Subtitle </span>
          <input type="text" name="subtitle" />
        </label>
        <label>
          <span>Image URL </span>
          <input type="url" name="imageUrl" />
        </label>
        <label>
          <span>Link URL </span>
          <input type="url" name="url" />
        </label>
        <label>
          <span>Text color </span>
          <input type="color" name="textColor" defaultValue={"#FFFFFF"} />
        </label>
        <label>
          <span>Background color </span>
          <input type="color" name="backgroundColor" defaultValue={"#000000"} />
        </label>
        <label>
          <span>Border color </span>
          <input type="color" name="borderColor" defaultValue={"#171717"} />
        </label>

        <button>Create image</button>
      </fieldset>
    </Form>
  );
}
