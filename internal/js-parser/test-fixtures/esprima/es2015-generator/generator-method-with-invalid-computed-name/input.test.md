# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-generator > generator-method-with-invalid-computed-name`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			location: Object {
				filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 4
					line: 1
				}
				start: Object {
					column: 4
					line: 1
				}
			}
			description: Object {
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Unclosed "}
						"property name"
					]
				}
				advice: Array [
					log {
						category: "info"
						text: MARKUP {
							parts: Array [
								RAW_MARKUP {value: "We expected to find the closing character <emphasis>"}
								"]"
								RAW_MARKUP {value: "</emphasis> here"}
							]
						}
					}
					frame {
						location: Object {
							filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
							end: Object {
								column: 11
								line: 1
							}
							start: Object {
								column: 11
								line: 1
							}
						}
					}
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
				end: Object {
					column: 24
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSObjectExpression {
				loc: Object {
					filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
					end: Object {
						column: 23
						line: 1
					}
					start: Object {
						column: 1
						line: 1
					}
				}
				properties: Array [
					JSObjectMethod {
						kind: "method"
						key: JSComputedPropertyKey {
							value: JSReferenceIdentifier {
								name: "yield"
								loc: Object {
									filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
									identifierName: "yield"
									end: Object {
										column: 10
										line: 1
									}
									start: Object {
										column: 5
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
								end: Object {
									column: 10
									line: 1
								}
								start: Object {
									column: 4
									line: 1
								}
							}
						}
						loc: Object {
							filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
							end: Object {
								column: 23
								line: 1
							}
							start: Object {
								column: 3
								line: 1
							}
						}
						head: JSFunctionHead {
							async: false
							generator: true
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
								end: Object {
									column: 15
									line: 1
								}
								start: Object {
									column: 11
									line: 1
								}
							}
							params: Array [
								JSBindingIdentifier {
									name: "iter"
									loc: Object {
										filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
										identifierName: "iter"
										end: Object {
											column: 15
											line: 1
										}
										start: Object {
											column: 11
											line: 1
										}
									}
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: Object {
											filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
											end: Object {
												column: 15
												line: 1
											}
											start: Object {
												column: 11
												line: 1
											}
										}
									}
								}
							]
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
								end: Object {
									column: 23
									line: 1
								}
								start: Object {
									column: 15
									line: 1
								}
							}
							body: Array [
								JSExpressionStatement {
									loc: Object {
										filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
										end: Object {
											column: 18
											line: 1
										}
										start: Object {
											column: 15
											line: 1
										}
									}
									expression: JSCallExpression {
										arguments: Array []
										loc: Object {
											filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
											end: Object {
												column: 18
												line: 1
											}
											start: Object {
												column: 15
												line: 1
											}
										}
										callee: JSReferenceIdentifier {
											name: "INVALID_PLACEHOLDER"
											loc: Object {
												filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
												end: Object {
													column: 16
													line: 1
												}
												start: Object {
													column: 15
													line: 1
												}
											}
										}
									}
								}
								JSBlockStatement {
									body: Array []
									directives: Array []
									loc: Object {
										filename: "esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js"
										end: Object {
											column: 21
											line: 1
										}
										start: Object {
											column: 19
											line: 1
										}
									}
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-generator/generator-method-with-invalid-computed-name/input.js:1:4 parse/js ━━━━━━━━

  ✖ Unclosed property name

  ℹ We expected to find the closing character ] here

    ({ *[yield iter]() {} })
               ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
