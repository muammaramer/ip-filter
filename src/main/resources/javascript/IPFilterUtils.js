/**
 * This function deploy the detail rows in error back to the update form validation
 */
function switchErrorRows()
{
    var parentId = "";
    $(".fieldError").each(function()
    {
        if($(this).html().length>0)
        {
            parentId = $(this).attr("parentId");
        }
    });
    switchRow(parentId);
}

/**
 * This function Switch a detail row from display to edit form
 * @elementId : the id of the row to switch
 */
function switchRow(elementId)
{
    //building css element id
    elementId="#"+elementId;

    //building css form id
    var elementFormId = elementId+"_form";

    //Checking which element to show and which element to hide
    if( $(elementId).is(":visible"))
    {

        var elementForm = $(elementFormId);
        var element = $(elementId);
        if(currentForm!='')
        {
            $(currentForm).hide();
            $(currentForm+" .updateField").attr("disabled","disabled");
            $(currentForm+" .statusSwitch").bootstrapSwitch();
            $(currentElement).show();
        }
        //Hide the display row
        element.hide();
        //Show the form
        elementForm.show();
        $(elementFormId+" .updateField").prop("disabled",false);
        $(elementFormId+" .statusSwitch").bootstrapSwitch();

    }
    else
    {
        //Hide the Form
        elementForm.hide();
        $(elementFormId+" .updateField").attr("disabled","disabled");
        $(elementFormId+" .statusSwitch").bootstrapSwitch();
        //Show the display Row
        element.show();
    }
    currentElement = elementId;
    currentForm = elementFormId;
    $(currentForm+" .bootstrap-switch").removeClass("bootstrap-switch-disabled");
}

/**
 * This function predefine and disable the rule type selection on sites that already have at least one rule defined
 * @elementId : the id of the row to switch
 */
function ApplyRuleConstraints()
{
    //Getting site
    var currentSite = $(".sites select").val();
    //Getting form inputs
    var ruleTypeTextInput = $(".ruleType input:text");
    var ruleTypeHiddenInput = $(".ruleType input:hidden");
    var ruleTypeSelectInput = $(".ruleType select");

    if (currentSite in philosophiesMap)
    {
        //Getting the ruleType constraint form sitename
        var currentConstraint = philosophiesMap[currentSite];

        if(currentConstraint!=undefined && currentConstraint != "")
        {// A rule type constraint exist on the site
            //Showing the ruleType value in a read only input
            ruleTypeTextInput.show();
            ruleTypeTextInput.prop('disabled', false);
            ruleTypeTextInput.val(philosophiesDisplayMap[currentSite]);
            ruleTypeTextInput.attr('readOnly', 'readOnly');
            //Submitting the value in hidden form
            ruleTypeHiddenInput.val(philosophiesMap[currentSite]);
            //Hiding the select input
            ruleTypeSelectInput.hide();
            ruleTypeSelectInput.prop('disabled', true);
        }
    }
    else
    {
        //Disable and hide input text
        ruleTypeTextInput.prop('disabled', true);
        ruleTypeTextInput.hide();
        //Enable and show select list
        ruleTypeSelectInput.prop('disabled', false);
        ruleTypeHiddenInput.val($(".ruleType select").val());
        ruleTypeSelectInput.show();
    }
}
