# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export-destructuring14`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
		end: Object {
			column: 0
			line: 4
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
				end: Object {
					column: 21
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			declaration: JSVariableDeclarationStatement {
				loc: Object {
					filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
					end: Object {
						column: 21
						line: 1
					}
					start: Object {
						column: 7
						line: 1
					}
				}
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
						end: Object {
							column: 21
							line: 1
						}
						start: Object {
							column: 7
							line: 1
						}
					}
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingIdentifier {
								name: "foo"
								loc: Object {
									filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
									identifierName: "foo"
									end: Object {
										column: 16
										line: 1
									}
									start: Object {
										column: 13
										line: 1
									}
								}
							}
							loc: Object {
								filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
								end: Object {
									column: 20
									line: 1
								}
								start: Object {
									column: 13
									line: 1
								}
							}
							init: JSNumericLiteral {
								value: 1
								format: undefined
								loc: Object {
									filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
									end: Object {
										column: 20
										line: 1
									}
									start: Object {
										column: 19
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
				end: Object {
					column: 33
					line: 2
				}
				start: Object {
					column: 0
					line: 2
				}
			}
			declaration: JSVariableDeclarationStatement {
				loc: Object {
					filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
					end: Object {
						column: 33
						line: 2
					}
					start: Object {
						column: 7
						line: 2
					}
				}
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
						end: Object {
							column: 33
							line: 2
						}
						start: Object {
							column: 7
							line: 2
						}
					}
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingObjectPattern {
								rest: undefined
								loc: Object {
									filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
									end: Object {
										column: 26
										line: 2
									}
									start: Object {
										column: 13
										line: 2
									}
								}
								properties: Array [
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "foo2"
												loc: Object {
													filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
													identifierName: "foo2"
													end: Object {
														column: 19
														line: 2
													}
													start: Object {
														column: 15
														line: 2
													}
												}
											}
											loc: Object {
												filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
												end: Object {
													column: 19
													line: 2
												}
												start: Object {
													column: 15
													line: 2
												}
											}
										}
										value: JSBindingIdentifier {
											name: "foo"
											loc: Object {
												filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
												identifierName: "foo"
												end: Object {
													column: 24
													line: 2
												}
												start: Object {
													column: 21
													line: 2
												}
											}
										}
										loc: Object {
											filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
											end: Object {
												column: 24
												line: 2
											}
											start: Object {
												column: 15
												line: 2
											}
										}
									}
								]
							}
							loc: Object {
								filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
								end: Object {
									column: 32
									line: 2
								}
								start: Object {
									column: 13
									line: 2
								}
							}
							init: JSReferenceIdentifier {
								name: "bar"
								loc: Object {
									filename: "es2015/modules/duplicate-named-export-destructuring14/input.js"
									identifierName: "bar"
									end: Object {
										column: 32
										line: 2
									}
									start: Object {
										column: 29
										line: 2
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
