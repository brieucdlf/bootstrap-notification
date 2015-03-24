/**
 * Bootstrap notify
 * helpful functions to call
 */

/**
 * [successAlert]
 * @param  {[string]} message [whatever message]
 */
function successAlert(message) {
    $.notify({
            icon: 'fa fa-check fa-4x',
            title: 'Valide ;)',
        message: message
    },{
        type: 'minimalist',
        delay: 5000,
        animate: {
            enter: 'animated zoomInDown',
            exit: 'animated zoomOutUp'
        },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<i data-notify="icon" class="pull-left"></i>' +
        '<span data-notify="titleValid">{1}</span>' +
        '<span data-notify="message">{2}</span>' +
        '</div>'
    });
}

/**
 * [warningAlert]
 * @param  {[string]} message [whatever message]
 */
function warningAlert(message) {
    $.notify({
        icon: 'fa fa-warning fa-4x',
        title: 'Erreur ;(',
        message: message
    },{
        type: 'minimalist',
        delay: 5000,
        animate: {
            enter: 'animated zoomInDown',
            exit: 'animated zoomOutUp'
        },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<i data-notify="icon" class="pull-left"></i>' +
        '<span data-notify="title">{1}</span>' +
        '<span data-notify="message">{2}</span>' +
        '</div>'
    });
}

/**
 * [dangerAlert]
 * @param  {[string]} message [whatever message]
 */
function dangerAlert(message) {
    $.notify({
        icon: 'fa fa-close fa-4x',
        title: 'Erreur ;(',
        message: message
    },{
        type: 'minimalist',
        delay: 5000,
        animate: {
            enter: 'animated zoomInDown',
            exit: 'animated zoomOutUp'
        },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<i data-notify="icon" class="pull-left"></i>' +
        '<span data-notify="title">{1}</span>' +
        '<span data-notify="message">{2}</span>' +
        '</div>'
    });
}
