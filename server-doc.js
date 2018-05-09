/**
 * @api {get} /api/hasAlpha Test String for Alphabet
 * @apiName HasAlpha
 * @apiDescription Determines if string contains at least one of each letter of the alphabet. Return true if all are found and false if not.
 * @apiGroup Api
 * @apiParam {String} text Mandatory string input to submit for testing.
 * @apiSuccess (Success - 200) {Boolean} True if input contains all letters of alphabet.
 * @apiSuccessExample {Boolean} Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 * @apiError (4xx) {json} BadRequest 400 - Input text cannot be determined.
 * @apiError (4xx) {json} NotFound 404 - Not Found!
 * @apiError (5xx) {json} InternalServerError 500 - Oops! Something went wrong! 
 * @apiErrorExample {json} 400-Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       error: 'Input text cannot be determined.'
 *     }
 * @apiErrorExample {json} 404-Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       error: 'Not Found!'
 *     }
 * @apiErrorExample {json} 500-Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       error: 'Oops! Something went wrong!'
 *     }
 */

