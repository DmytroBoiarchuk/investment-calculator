// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
export function computeResult({initInv =0, annualInv=0, expReturn=0, years=0}){
  const result =  [...calculateInvestmentResults({initialInvestment: +initInv, annualInvestment: +annualInv, expectedReturn: +expReturn, duration: +years})]
  return result.map((yearNumber)=>{
    return {
      investValue: yearNumber.valueEndOfYear,
      interest: yearNumber.interest,
      totalInterest: [...result].splice(0,yearNumber.year).reduce((acc, currValue) =>  acc + currValue.interest,0),
      investedCapital: +initInv + (yearNumber.annualInvestment * yearNumber.year),
    }
  })

}
//[{investValue:16725, interest: 825, totalInterest: 825, investedCapital:15900 }]