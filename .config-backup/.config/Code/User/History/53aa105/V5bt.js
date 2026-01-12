import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const git = simpleGit();

const getRandomDate = () => {
  const start = moment("2025-12-24");
  const end = moment("2025-10-06")
  const diffDays = end.diff(start, "days");
  const randomOffset = random.int(0, diffDays);
  return start.clone().add(randomOffset, "days").format();
};

const markCommit = async (date) => {
  const data = { date };
  jsonfile.writeFileSync(path, data);
  await git.add([path]);
  await git.commit(date, { "--date": date });
};

const makeCommits = async (n) => {
  for (let i = 0; i < n; i++) {
    const date = getRandomDate();
    console.log(`Committing: ${date}`);
    console.log(`Remaining commits: ${n - i - 1}`);
    await markCommit(date);
  }

  try {
    const result = await git.push("origin", "feat/new-contributions");
    console.log("Push successful:", result);
  } catch (err) {
    console.error("Error during push:", err);
  }
};

makeCommits(200);