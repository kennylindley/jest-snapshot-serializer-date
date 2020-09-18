# A Jest snapshot serializer for Dates

When encountering a JavaScript Date object within a Jest snapshot, this serializer converts it to GMT and displays them in a readable string. It then serializes them as follows:

`+ "yourDate": "{{ DateObject [2020-09-18T00:00:00.000] }}"`

## Install
Install the package as a dev-dependency

`yarn add --dev @simplymadeapps/jest-snapshot-serializer-date`

Tell jest to use the package in package.json:

```json
"jest": {
  "snapshotSerializers": ["jest-snapshot-serializer-date"]
}
```
