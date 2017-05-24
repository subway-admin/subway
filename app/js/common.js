/**
 * Created by 11561 on 2017/5/24.
 */
function loadCheckboxSelect(){
    selectAll();
    selectSingle();
}

function selectAll(){
    var $ = layui.jquery;
    $(document).on('click','table thead tr th input+div',function(){
        var _this = $(this).siblings('input');
        var childCheckbox = _this.parents('thead').siblings('tbody').find('tr td input');
        if(_this.is(":checked")){
            childCheckbox.attr('checked',true);
            childCheckbox.siblings('div').addClass('layui-form-checked');
        }else{
            childCheckbox.attr('checked',false);
            childCheckbox.siblings('div').removeClass('layui-form-checked');
        }
    })
}

function selectSingle(){
    var $ = layui.jquery;
    $(document).on('click','table tr td input+div',function(){
        var _this = $(this).siblings('input');
        var allSelect = _this.parents('tbody').siblings('thead').find('tr th input');
        if(_this.is(":checked")){
            var $siblingsInput = $(_this).parents('tbody').find('tr input');
            var sum = 0;
            $.each($siblingsInput,function(index,item){
                if($(this).is(':checked')){
                    sum ++ ;
                }
            });
            if(sum == $siblingsInput.length){
                allSelect.attr('checked',true);
                allSelect.siblings('div').addClass('layui-form-checked');
            }
        }else{
            allSelect.attr('checked',false);
            allSelect.siblings('div').removeClass('layui-form-checked');
        }
    })
}