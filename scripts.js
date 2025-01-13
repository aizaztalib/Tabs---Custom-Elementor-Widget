/* --------------------------------------------------
    * tabs
    * --------------------------------------------------*/
var customTabs = function ($scope, $) {

    $scope.find('.xp-tabs').each(function() {
        var selector = $(this),
            tabs     = selector.find('.tabs-heading li'),
            content  = selector.find('.tab-content');
        tabs.first().addClass('current');
        content.first().addClass('current');

        tabs.on( 'click', function(){
            var tab_id = $(this).attr('data-tab');
            $(this).siblings().removeClass('current');
            $(this).parents('.xp-tabs').find('.tab-content').removeClass('current');
            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        });
    });
};