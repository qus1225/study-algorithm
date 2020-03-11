import { HashTable } from "./hashTable";

describe("dataStructure > hashTable 에서", () => {
  it("HashTable 클래스는 잘 동작한다.", () => {
    const hashTable = new HashTable(30);

    hashTable.put("monkey", "엉덩이가 빨갛다");
    hashTable.put("cat", "귀엽지만 도도하다");
    hashTable.put("elelphant", "코로 받아 먹는다");

    expect(hashTable.get("monkey")).toEqual("엉덩이가 빨갛다");
    expect(hashTable.get("cat")).toEqual("귀엽지만 도도하다");
    expect(hashTable.get("elelphant")).toEqual("코로 받아 먹는다");

    hashTable.remove("cat");
    expect(hashTable.get("cat")).toEqual(undefined);

    // console.log(hashTable.toString());
  });
});
