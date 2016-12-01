define([
    'jquery',
    'underscore',
    'backbone',
    '../../template/page/register.html',
    '../../template/section/register.html',
], function ($, _, Backbone, RegisterPageTemplate, RegisterSectionTemplate) {
    var body         = $('body'),
        registerView = Backbone.View.extend({
            template  : {
                page   : _.template(RegisterPageTemplate),
                section: _.template(RegisterSectionTemplate)
            },
            initialize: function () {
                this.render();
            },
            render    : function () {
                body.removeClass().addClass('register');
                this.$el.html(this.template.page);
                return this;
            }
        });
    return registerView;
});