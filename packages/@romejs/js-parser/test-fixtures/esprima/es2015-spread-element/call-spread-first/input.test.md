# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-spread-element > call-spread-first`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 15
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 14
          index: 14
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: CallExpression {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 13
            index: 13
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        callee: ReferenceIdentifier {
          name: 'f'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 1
              index: 1
              line: 1
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
        }
        arguments: Array [
          SpreadElement {
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 6
                index: 6
                line: 1
              }
              start: Object {
                column: 2
                index: 2
                line: 1
              }
            }
            argument: ReferenceIdentifier {
              name: 'x'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 6
                  index: 6
                  line: 1
                }
                start: Object {
                  column: 5
                  index: 5
                  line: 1
                }
              }
            }
          }
          ReferenceIdentifier {
            name: 'y'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 9
                index: 9
                line: 1
              }
              start: Object {
                column: 8
                index: 8
                line: 1
              }
            }
          }
          ReferenceIdentifier {
            name: 'z'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 12
                index: 12
                line: 1
              }
              start: Object {
                column: 11
                index: 11
                line: 1
              }
            }
          }
        ]
      }
    }
  ]
}
```