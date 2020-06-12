class RockPaperScissors {
  constructor(username) {
    this.username = username;
    (this.score = {
      user: 0,
      cpu: 0,
    }),
    (this.gameHistoryLog = []);
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse() {
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    const index = Math.floor(Math.random() * 3);
    return acceptedValues[index];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win:
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`)
   *     OR
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection) {
    if (userSelection === cpuSelection) {
      return `tie`;
    }

    if (userSelection === `rock` && cpuSelection === `scissors`) {
      return `win`;
    }
    if (userSelection === `paper` && cpuSelection === `rock`) {
      return `win`;
    }
    if (userSelection === `scissors` && cpuSelection === `paper`) {
      return `win`;
    }

    return `lose`;
  }

  /**
   *
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection) {
    const cpuMove = this.generateCPUResponse();
    const verdict = this.determineWinner(userSelection, cpuMove);
    let verdictPhrase = null;
    if (verdict === `win`) {
      this.score.user++;
      verdictPhrase = `${this.username} wins`;
    } else if (verdict === `lose`) {
      this.score.cpu++;
      verdictPhrase = `cpu wins`;
    }
    if (!verdictPhrase) {
      verdictPhrase = `it's a tie!`;
    }

    this.gameHistoryLog.push(
      `${this.username} selected ${userSelection}, CPU selected ${cpuMove}: ${verdictPhrase} \n`
    );
  }
}
