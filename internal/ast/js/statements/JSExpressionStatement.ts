/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyJSExpression, NodeBaseWithComments} from "@internal/ast";
import {createBuilder} from "../../utils";

export interface JSExpressionStatement extends NodeBaseWithComments {
	readonly type: "JSExpressionStatement";
	readonly expression: AnyJSExpression;
}

export const jsExpressionStatement = createBuilder<JSExpressionStatement>(
	"JSExpressionStatement",
	{
		bindingKeys: {},
		visitorKeys: {
			expression: true,
		},
	},
);
