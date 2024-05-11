const getRandomNum = num => {
    return Math.floor(Math.random() * num)
}
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  let generatedWisdom = [];
  for(let prop in collectiveWisdom) {
    let optionIdx = getRandomNum(collectiveWisdom[prop].length)
    if(prop === 'signInfo') {
        generatedWisdom.push(` Your sign is a ${collectiveWisdom[prop][optionIdx]}`)
    } else if(prop === 'fortuneOutput') {
        generatedWisdom.push(`You Are having a ${collectiveWisdom[prop][optionIdx]}`)
    } else if(prop === 'advice' ) {
        generatedWisdom.push(`You should ${collectiveWisdom[prop][optionIdx]}`)
    } else {
        generatedWisdom.push('No Enough Information')
    }
  }
let joinWisdom = wisdom => {
    return wisdom.join
}
console.log(joinWisdom(generatedWisdom));


