const functions = require("firebase-functions");
const app = require("express")();

const cors = require("cors")({origin: true});
app.use(cors);

app.get("/", (req, res) => {
res.send(`Loan Calc : Hello from Express in Cloud Functions for Firebase `);
});

app.get("/:claster/:price/:dp/:term/:discount", (req, res) => {

	var claster = req.params.claster;
	var price = req.params.price;
	var term = req.params.term;
	var dp = req.params.dp;
	var discount = req.params.discount;

	var percent=0;
	var getpercent=0;
	var processfee=2500;
	var totalfin=0;
	var ma=0;
	var splAdd=1.92;
	var aor=0;
	var prem=0.02;
	var premium=0;
	var tax=0.247;
	var taxes=0;
	var taxprim=0;
	var insurance=0;
	var term6=0;
	var term12=0;
	var term18=0;
	var term24=0;
	var term30=0;
	var term36=0;

	switch(claster)	{
		    case 'NationNoIns' :
		                percent = ((Number(dp))/ (Number(price))).toFixed(2);
						getpercent = Math.round(percent * 100).toFixed(2);
						totalfin = (((Number(price)) + processfee - (Number(dp)))+insurance).toFixed(2);
								if(getpercent) { 
									if(getpercent <= 4.99) aor = 2.40;
									else if(getpercent >= 5.0 && getpercent <= 5.99) aor = 2.35;
									else if(getpercent >= 6.0 && getpercent <= 7.99) aor = 2.30;
									else if(getpercent >= 8.0 && getpercent <= 9.99) aor = 2.25;
									else if(getpercent >= 10.0 && getpercent <= 11.99) aor = 2.20;
									else if(getpercent >= 12.0 && getpercent <= 14.99) aor = 2.15;
									else if(getpercent >= 15.0 && getpercent <= 19.99) aor = 2.10;
									else if(getpercent >= 20.0) aor = 2.00; }
					ma = Math.ceil((totalfin * (1+((aor/100)*(Number(term)))))/(Number(term))).toFixed(2);
					term6 = Math.ceil((totalfin * (1+((aor/100)*(Number(6)))))/(Number(term))).toFixed(2);
					term12 = Math.ceil((totalfin * (1+((aor/100)*(Number(12)))))/(Number(term))).toFixed(2);
					term18 = Math.ceil((totalfin * (1+((aor/100)*(Number(18)))))/(Number(term))).toFixed(2);
					term24 = Math.ceil((totalfin * (1+((aor/100)*(Number(24)))))/(Number(term))).toFixed(2);
					term30 = Math.ceil((totalfin * (1+((aor/100)*(Number(30)))))/(Number(term))).toFixed(2);
					term36 = Math.ceil((totalfin * (1+((aor/100)*(Number(36)))))/(Number(term))).toFixed(2);
		                break;
		    case 'NationWithIns' :
		    			premium = (Number(price))*(Number(prem));
		    			taxes = (Number(premium)) * (Number(tax));
		    			taxprim = (Number(premium)) + (Number(taxes));
		    			insurance = Math.ceil(((premium)) + (Number(taxes))).toFixed(2);
		                percent = Math.ceil((Number(dp))/ (Number(price))).toFixed(2);
						getpercent = Math.round(percent * 100).toFixed(2);
						totalfin = (((Number(price)) + processfee - (Number(dp)))+insurance).toFixed(2);
								if(getpercent)	{ 
									if(getpercent <= 4.99) aor = 2.40;
									else if(getpercent >= 5.0 && getpercent <= 5.99) aor = 2.35;
									else if(getpercent >= 6.0 && getpercent <= 7.99) aor = 2.30;
									else if(getpercent >= 8.0 && getpercent <= 9.99) aor = 2.25;
									else if(getpercent >= 10.0 && getpercent <= 11.99) aor = 2.20;
									else if(getpercent >= 12.0 && getpercent <= 14.99) aor = 2.15;
									else if(getpercent >= 15.0 && getpercent <= 19.99) aor = 2.10;
									else if(getpercent >= 20.0) aor = 2.00; }
					ma = Math.ceil((totalfin * (1+((aor/100)*(Number(term)))))/(Number(term))).toFixed(2);
					term6 = Math.ceil((totalfin * (1+((aor/100)*(Number(6)))))/(Number(term))).toFixed(2);
					term12 = Math.ceil((totalfin * (1+((aor/100)*(Number(12)))))/(Number(term))).toFixed(2);
					term18 = Math.ceil((totalfin * (1+((aor/100)*(Number(18)))))/(Number(term))).toFixed(2);
					term24 = Math.ceil((totalfin * (1+((aor/100)*(Number(24)))))/(Number(term))).toFixed(2);
					term30 = Math.ceil((totalfin * (1+((aor/100)*(Number(30)))))/(Number(term))).toFixed(2);
					term36 = Math.ceil((totalfin * (1+((aor/100)*(Number(36)))))/(Number(term))).toFixed(2);
		                 break;
		    case 'CebuNoIns' :
		                percent = ((Number(dp))/ (Number(price))).toFixed(2);
						getpercent = Math.round(percent * 100).toFixed(2);
						totalfin = (((Number(price)) + processfee - (Number(dp)))+insurance).toFixed(2);
								if(getpercent)	{ 
									if(getpercent <= 4.99) aor = 2.40;
									else if(getpercent >= 5.0 && getpercent <= 5.99) aor = 2.35;
									else if(getpercent >= 6.0 && getpercent <= 7.99) aor = 2.30;
									else if(getpercent >= 8.0 && getpercent <= 9.99) aor = 2.25;
									else if(getpercent >= 10.0 && getpercent <= 11.99) aor = 2.20;
									else if(getpercent >= 12.0 && getpercent <= 14.99) aor = 2.15;
									else if(getpercent >= 15.0 && getpercent <= 19.99) aor = 2.10;
									else if(getpercent >= 20.0) aor = 2.00;	}
					ma = Math.ceil((totalfin * (1+((aor/100)*(Number(term)))))/(Number(term))).toFixed(2);
					term6 = Math.ceil((totalfin * (1+((aor/100)*(Number(6)))))/(Number(term))).toFixed(2);
					term12 = Math.ceil((totalfin * (1+((aor/100)*(Number(12)))))/(Number(term))).toFixed(2);
					term18 = Math.ceil((totalfin * (1+((aor/100)*(Number(18)))))/(Number(term))).toFixed(2);
					term24 = Math.ceil((totalfin * (1+((aor/100)*(Number(24)))))/(Number(term))).toFixed(2);
					term30 = Math.ceil((totalfin * (1+((aor/100)*(Number(30)))))/(Number(term))).toFixed(2);
					term36 = Math.ceil((totalfin * (1+((aor/100)*(Number(36)))))/(Number(term))).toFixed(2);
		                 break;
		    case 'CebuWithIns' :
		              premium = (Number(price))*(Number(prem));
		    			taxes = (Number(premium)) * (Number(tax));
		    			taxprim = (Number(premium)) + (Number(taxes));
		    			insurance = Math.ceil(((premium)) + (Number(taxes))).toFixed(2);
		                percent = Math.ceil((Number(dp))/ (Number(price))).toFixed(2);
						getpercent = Math.round(percent * 100).toFixed(2);
						totalfin = (((Number(price)) + processfee - (Number(dp)))+insurance).toFixed(2);
								if(getpercent)	{ 
									if(getpercent <= 4.99) aor = 2.40;
									else if(getpercent >= 5.0 && getpercent <= 5.99) aor = 2.35;
									else if(getpercent >= 6.0 && getpercent <= 7.99) aor = 2.30;
									else if(getpercent >= 8.0 && getpercent <= 9.99) aor = 2.25;
									else if(getpercent >= 10.0 && getpercent <= 11.99) aor = 2.20;
									else if(getpercent >= 12.0 && getpercent <= 14.99) aor = 2.15;
									else if(getpercent >= 15.0 && getpercent <= 19.99) aor = 2.10;
									else if(getpercent >= 20.0) aor = 2.00; }
					ma = Math.ceil((totalfin * (1+((aor/100)*(Number(term)))))/(Number(term))).toFixed(2);
					term6 = Math.ceil((totalfin * (1+((aor/100)*(Number(6)))))/(Number(term))).toFixed(2);
					term12 = Math.ceil((totalfin * (1+((aor/100)*(Number(12)))))/(Number(term))).toFixed(2);
					term18 = Math.ceil((totalfin * (1+((aor/100)*(Number(18)))))/(Number(term))).toFixed(2);
					term24 = Math.ceil((totalfin * (1+((aor/100)*(Number(24)))))/(Number(term))).toFixed(2);
					term30 = Math.ceil((totalfin * (1+((aor/100)*(Number(30)))))/(Number(term))).toFixed(2);
					term36 = Math.ceil((totalfin * (1+((aor/100)*(Number(36)))))/(Number(term))).toFixed(2);
		                 break;
		    case 'CebuSpclNoIns' :
						percent = ((Number(dp))/ (Number(price))).toFixed(2);
						getpercent = Math.round(percent * 100).toFixed(2);
						totalfin = (((Number(price)) + processfee - (Number(dp)))+insurance).toFixed(2);
						aor = 1.92;
					ma = Math.ceil((totalfin * (1+((aor/100)*(Number(term)))))/(Number(term))).toFixed(2);
					term6 = Math.ceil((totalfin * (1+((aor/100)*(Number(6)))))/(Number(term))).toFixed(2);
					term12 = Math.ceil((totalfin * (1+((aor/100)*(Number(12)))))/(Number(term))).toFixed(2);
					term18 = Math.ceil((totalfin * (1+((aor/100)*(Number(18)))))/(Number(term))).toFixed(2);
					term24 = Math.ceil((totalfin * (1+((aor/100)*(Number(24)))))/(Number(term))).toFixed(2);
					term30 = Math.ceil((totalfin * (1+((aor/100)*(Number(30)))))/(Number(term))).toFixed(2);
					term36 = Math.ceil((totalfin * (1+((aor/100)*(Number(36)))))/(Number(term))).toFixed(2);
		                 break;
		    case 'CebuSpclWithIns' :
		             	premium = (Number(price))*(Number(prem));
		    			taxes = (Number(premium)) * (Number(tax));
		    			taxprim = (Number(premium)) + (Number(taxes));
		    			insurance = Math.ceil(((premium)) + (Number(taxes))).toFixed(2);
		                percent = Math.ceil((Number(dp))/ (Number(price))).toFixed(2);
						getpercent = Math.round(percent * 100).toFixed(2);
						totalfin = (((Number(price)) + processfee - (Number(dp)))+insurance).toFixed(2);
						aor = 1.92;
					ma = Math.ceil((totalfin * (1+((aor/100)*(Number(term)))))/(Number(term))).toFixed(2);
					term6 = Math.ceil((totalfin * (1+((aor/100)*(Number(6)))))/(Number(term))).toFixed(2);
					term12 = Math.ceil((totalfin * (1+((aor/100)*(Number(12)))))/(Number(term))).toFixed(2);
					term18 = Math.ceil((totalfin * (1+((aor/100)*(Number(18)))))/(Number(term))).toFixed(2);
					term24 = Math.ceil((totalfin * (1+((aor/100)*(Number(24)))))/(Number(term))).toFixed(2);
					term30 = Math.ceil((totalfin * (1+((aor/100)*(Number(30)))))/(Number(term))).toFixed(2);
					term36 = Math.ceil((totalfin * (1+((aor/100)*(Number(36)))))/(Number(term))).toFixed(2);
		                 break;
		    default : claster = '/';
		  }

		  if(claster)
		  {
		  		if(claster == 'NationNoIns') claster='Nationwide No Insurance';
		  		else if(claster == 'NationWithIns') claster='Nationwide With Insurance';
		  		else if(claster == 'CebuNoIns') claster='Cebu No Insurance';
		  		else if(claster == 'CebuWithIns') claster='Cebu With Insurance';
		  		else if(claster == 'CebuSpclNoIns') claster='Cebu YHM/HND No Insurance';
		  		else if(claster == 'CebuSpclWithIns') claster='Cebu YHM/HND With Insurance';
		  }
	var id = new Date().getTime().toString();
	var details = 
	{
		id: id,
		claster : claster,
		price : price,
		dp : dp,
		term : term,
		aor: aor,
		percent : percent,
		getpercent : getpercent,
		totalfin : totalfin,
		processfee : processfee,
		taxes : taxes,
		premium : premium,
		insurance : insurance,
		ma : ma,
		term6 : term6,
		term12 : term12,
		term18 : term18,
		term24 : term24,
		term30 : term30,
		term36 : term36,
	};

		res.json(201,details);

});
exports.api = functions.https.onRequest(app);
