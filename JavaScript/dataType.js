function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object,undefined], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
var sunil;
console.log(detect_data_type(sunil));
console.log(detect_data_type("sunil"));
console.log(detect_data_type(function fn(){}));
console.log(detect_data_type(/abc/));

