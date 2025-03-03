import { IDataSchema, IUISchema } from "@ijstech/components";

const propertiesUISchema: IUISchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Categorization",
          elements: [
            {
              type: "Category",
              label: "General settings",
              elements: [
                {
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/linkButtons",
                          options: {
                            elementLabelProp: "caption",
                            detail: {
                              type: "HorizontalLayout",
                              elements: [
                                {
                                  type: "HorizontalLayout",
                                  elements: [
                                    {
                                      type: "Control",
                                      scope: "#/properties/caption"
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/url"
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "Category",
              label: "Theme settings",
              elements: [
                {
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/textAlign"
                        }
                      ]
                    },
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/height"
                        }
                      ]
                    },
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/buttonType"
                        }
                      ]
                    },
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Group",
                          label: "Dark mode",
                          elements: [
                            {
                              type: "Control",
                              scope: "#/properties/dark",
                              options: {
                                elementLabelProp: "caption",
                                detail: {
                                  type: "HorizontalLayout",
                                  elements: [
                                    {
                                      type: "HorizontalLayout",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/color"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/backgroundColor"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        },
                      ]
                    },
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Group",
                          label: "Light mode",
                          elements: [
                            {
                              type: "Control",
                              scope: "#/properties/light",
                              options: {
                                elementLabelProp: "caption",
                                detail: {
                                  type: "HorizontalLayout",
                                  elements: [
                                    {
                                      type: "HorizontalLayout",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/color"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/backgroundColor"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function getDataSchema(readOnly = false) {
  const schema: IDataSchema = {
    type: "object",
    properties: {
      linkButtons: {
        type: "array",
        items: {
          type: "object",
          properties: {
            caption: {
              type: "string"
            },
            url: {
              type: "string"
            }
          }
        }
      },
      dark: {
        type: 'object',
        properties: {
          color: {
            type: 'string',
            format: 'color'
          },
          backgroundColor: {
            type: 'string',
            format: 'color'
          }
        }
      },
      light: {
        type: 'object',
        properties: {
          color: {
            type: 'string',
            format: 'color'
          },
          backgroundColor: {
            type: 'string',
            format: 'color'
          }
        }
      },
      textAlign: {
        type: 'string',
        enum: [
          'left',
          'center',
          'right'
        ],
        readOnly
      },
      height: {
        type: 'number'
      },
      buttonType: {
        type: 'string',
        enum: [
          'filled',
          'outlined',
          'text'
        ]
      }
    }
  };

  return schema;
}

export {
  propertiesUISchema,
  getDataSchema
}