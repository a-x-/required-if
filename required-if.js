/**
 * @file Required-If
 * Created: 18.08.14 / 4:43
 * License: MIT
 * Author: a-x-
 */

/**
 * @todo add remap feature (re-traversal targets, perform add/del operations on demand)
 * @todo add another conditions types support
 * @todo add another factorElements types support
 */
(function () {
    var targets = [].slice.call(document.querySelectorAll('[data-required]')),
        assignObjectIfUndefined = function(object,property) {
            return object[property] || (object[property] = {});
        },
        conditionMap = {};
    //
    // Initial targets traversal
    targets.forEach(function (target, i) {
        // Mark target for futher reasons
        target.classList.add('requiredif-target');target.dataset.requiredifTargetId = i + 1;
        var declarator = target.dataset.required;
        declarator.split(/\s*,\s*/).forEach(function (declaratorBranch) {
            //
            // Parse `"if" <selector> "[" <attribute> "]"` declarator
            (function () {
                console.log('Parse [attribute] syntax');
                var descriptor = declaratorBranch.match(/^if\s+(.*)\s*\[([a-z\-]+)\]$/i);
                if (descriptor === null || !descriptor[1] || !descriptor[2]) {
                    return false;
                }
                var factorElementSelector = descriptor[1],
                    factorElement = document.querySelector(factorElementSelector);
                var conditionAttribute = descriptor[2];
                //
                // Store current condition value
                target.required
                    = assignObjectIfUndefined(conditionMap, target.dataset.requiredifTargetId)[factorElementSelector]
                    = !!factorElement[conditionAttribute] && !factorElement.hasAttribute('disabled');
                console.log(factorElementSelector, factorElement, factorElement[conditionAttribute], conditionAttribute, i + 1);
                // Add listener to factorElement
                if(factorElement.tagName.toLowerCase() === 'input' && factorElement.type.toLowerCase() === 'radio') {
                    document.querySelectorAll('[name="'+factorElement.name+'"]').addEventListener('change', function (event) {
                        // Attention!: Lisp pasta...
                        if (
                        // factorElement has specified attribute
                            (factorElement[conditionAttribute])
                                === //
                                // previous condition value is false
                                ((conditionMap[target.dataset.requiredifTargetId] || [])[factorElementSelector] === false)
                            ) {
                            target.required
                                = conditionMap[target.dataset.requiredifTargetId][factorElementSelector]
                                = (!!factorElement[conditionAttribute] && !factorElement.hasAttribute('disabled'));
                        }
                    });
                }
                else if (false) {
                    // todo another element processor
                }
                else {
                    throw 'unknown element type';
                }
                return true;
            }())
            ||(function(){
                // another declarator processor
            }());
        });
    });
    console.log({conditionMap:conditionMap, targets:targets});
}());