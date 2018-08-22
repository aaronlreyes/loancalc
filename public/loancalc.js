var app = new Vue({
  el: '#app',
  data: 
  {
    cashprice : '',
    insurance : '',
    dp : '',
    term : '',
    pfee : '',
    dpp : '',
    aor : '',
    fa : '',
    ma : '',
    term6 : 0,
    term12 : 0,
    term18 : 0,
    term24 : 0,
    term30 : 0,
    term36 : 0,
    checkinsurance : false,
    cebuchecked : false,
    yamahacheck : false,
    hondacheck : false,
    kawasakicheck : false,
    suzukicheck : false,
    kymcocheck : false,
    ins : '',
    premium : '',
    taxes : '',
    discount : '',
    claster : '',
  },

  methods:
    {
      check() {

        var self = this;

        if((self.yamahacheck || self.hondacheck) && self.cebuchecked && self.checkinsurance == false)
        {
          self.validation();
          this.claster='CebuSpclNoIns';
          self.compute();
        }
        else if((self.yamahacheck || self.hondacheck) && self.cebuchecked && self.checkinsurance)
        {
          self.validation();
          this.claster='CebuSpclWithIns';
          self.compute();
        }
        else if(self.cebuchecked && self.checkinsurance)
        {
          self.validation();
          this.claster='CebuWithIns';
          self.compute();

        }
        else if(self.cebuchecked)
        {
          self.validation();
          this.claster='CebuNoIns';
          self.compute();
        }
        else if(self.checkinsurance)
        {
          self.validation();
          this.claster='NationWithIns';
          self.compute();
        }
        else
        {
          self.validation();
          this.claster='NationNoIns';
          self.compute();
        }
      },

      validation() {
        var self = this

        if(this.cashprice == '')
        {
          self.cashprice=0;
        }
        if(this.dp == '')
        {
          self.dp=0;
        }
        if(this.term == '')
        {
          self.term=0;
        }
        if(this.discount == '')
        {
          self.discount=0;
        }
      },

      compute() {
        var self = this

        axios.get("https://us-central1-loan-calculator-7f21f.cloudfunctions.net/api/"+self.claster+"/"+ self.cashprice +"/"+ self.dp +"/"+ self.term +"/"+ self.discount).then(response => 
        {
          self.ma=response.data.ma
          self.aor=response.data.aor
          self.fa=response.data.totalfin
          self.dpp=response.data.getpercent
          self.term6=response.data.term6
          self.term12=response.data.term12
          self.term18=response.data.term18
          self.term24=response.data.term24
          self.term30=response.data.term30
          self.term36=response.data.term36
          self.ins=response.data.insurance
          self.taxes=response.data.taxes
          self.premium=response.data.premium
          self.discount=response.data.discount
        })
      },

      theclear() {
          var self = this
          self.cashprice='';
          self.pfee='';
          self.insurance='';
          self.dp='';
          self.term='';
          self.ma='';
          self.aor='';
          self.fa='';
          self.dpp='';
          self.term6='';
          self.term12='';
          self.term18='';
          self.term24='';
          self.term30='';
          self.term36='';
          self.ins='';
          self.taxes='';
          self.premium='';
          self.discount='';
          self.checkinsurance = false;
          self.cebuchecked = false;
          self.yamahacheck = false;
          self.hondacheck = false;
          self.kawasakicheck = false;
          self.suzukicheck = false;
          self.kymcocheck = false;
      },
    },
})
