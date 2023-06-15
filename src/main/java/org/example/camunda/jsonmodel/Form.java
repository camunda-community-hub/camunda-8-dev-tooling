package org.example.camunda.jsonmodel;

import com.fasterxml.jackson.databind.JsonNode;
import java.util.Date;

public class Form {

  private String name;

  private Date modified;

  private JsonNode schema;

  private JsonNode previewData;

  private String generator;

  public Form() {}

  public Form(String name, JsonNode schema) {
    super();
    this.name = name;
    this.schema = schema;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public JsonNode getSchema() {
    return schema;
  }

  public void setSchema(JsonNode schema) {
    this.schema = schema;
  }

  public JsonNode getPreviewData() {
    return previewData;
  }

  public void setPreviewData(JsonNode previewData) {
    this.previewData = previewData;
  }

  public Date getModified() {
    return modified;
  }

  public void setModified(Date modified) {
    this.modified = modified;
  }

  public String getGenerator() {
    return generator;
  }

  public void setGenerator(String generator) {
    this.generator = generator;
  }
}
