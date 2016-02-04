(function ($) {
  Drupal.behaviors.tooltipster = {
    attach:function (context, settings) {
      if (Drupal.settings.vars) {
        var sel = Drupal.settings.vars.selector.length;
        var inputObj = '';
        for(var i = 0; i < sel; i++) {
          inputObj = {
            content: Drupal.settings.vars.content[i],
            position: Drupal.settings.vars.position[i],
            theme: Drupal.settings.vars.properties[i].theme,
          };
          //Object.assign(inputObj, Drupal.settings.vars.properties[i]);
          $(Drupal.settings.vars.selector[i]).tooltipster(inputObj);
        }

      }
    },
  };
})(jQuery);
