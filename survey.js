const readline = require('readline');
const survey = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
survey.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
  survey.question('What\s an activity you like doing? ', (answer2) => {
    survey.question('What do you listen to while doing that ? ', (answer3) => {
      survey.question('Which meal is your favourite(eg: dinner, brunch, etc.)', (answer4) => {
        survey.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          survey.question('Which sport is your absolute favourite ? ', (answer6) => {
            survey.question('What is your superpower ? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`)
              survey.close()

            });
          });
        });
      });
    });
  });
});
