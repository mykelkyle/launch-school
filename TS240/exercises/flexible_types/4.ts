interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const obj: KeyValuePair<string, number> = {
  key: "some value",
  value: 1,
};
