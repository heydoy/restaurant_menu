const idenNumber = ['010','011','016','017','018','019','02','031','032','033','041','042','043','044','051','052','053','054','055','061','062','063','064','070','080'];

let myMixin = {
  props: {
    telNumber:{
      type: Array,
      default: () => {
        return idenNumber
      }
    }
  },
};




export default myMixin;
