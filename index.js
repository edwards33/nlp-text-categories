var natural = require('natural')
var classifier = new natural.BayesClassifier()

var dataForTraining = [
    {text: 'RE: Canadian drugs now on sale', label: 'spam'}, 
    {text: 'Earn more from home', label: 'spam'},
    {text: 'Information now available!!!', label: 'spam'},
    {text: 'Project planning - next steps', label: 'notspam'},
    {text:'Birthday party next weekend', label: 'notspam'},
    {text: 'Earn easy cash', label: 'spam'},
    {text: 'Your business trip is confirmed for Monday the 4th', label: 'notspam'},
    {text: 'Drinks on Monday?', label: 'notspam'}
]

var dataForTest = [
    {text: 'Meet me at home?', label: 'notspam'},
    {text: 'Drugs for cheap', label: 'spam'},
    {text: 'Next deadline due Monday', label: 'notspam'},
    {text: 'Hang out with someone near you', label: 'spam'}
]

dataForTraining.forEach(function(item){
    classifier.addDocument(item.text, item.label)
})

classifier.train()

dataForTest.forEach(function(item){
    var labelGuess = classifier.classify(item.text)
    console.log("\n")
    console.log(item.text)
    console.log(`Label: ${labelGuess}`)
    console.log(classifier.getClassifications(item.text))
})
