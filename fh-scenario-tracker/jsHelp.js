var oldJson = [
  { "title": "Starting Questline", "indexes": [0, 1, 2, 3, 4] },
  {
    "title": "Algox Questline",
    "indexes": [ 5, 6, 9, 10, 11, 12, 17, 18, 19, 20, 27, 28, 29, 30, 31, 38, 39, 40, 41, 45, 46, 47, 48, 52, 55, 56, 57 ]
  },
  {
    "title": "Lurker Questline",
    "indexes": [7, 13, 14, 21, 22, 32, 33, 42, 49, 50, 53, 54, 60]
  },
  {
    "title": "Unfettered Questline",
    "indexes": [8, 15, 16, 23, 24, 25, 26, 34, 35, 36, 37, 43, 44, 51, 58, 59]
  },
  {
    "title": "Job Posting",
    "indexes": [ 78, 79, 80, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 132, 133 ]
  },
  {
    "title": "Other Scenarios",
    "indexes": [ 81, 82, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 134, 135, 136, 137]
  },
  {
    "title": "Personal Quests",
    "indexes": [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77]
  },
  {
    "title": "Random Scenarios",
    "indexes": [104, 105, 106, 107, 108, 109, 110, 111, 112]
  },
  { "title": "Puzzle Book", "indexes": [61, 62, 63, 64] }
]


let newjson = oldJson.map((obj) => {
  return (
    {
      title: obj.title,
      indexPath: obj.indexes.map((i) => {
        return (
          { index: i, xPos: 0, yPos: 0 }
        )
    }
  )
})})

console.log(JSON.stringify(newjson, null, 2))
