import { extract, patch, install } from "create-sst";

export default [
  extract(),
  install({
    packages: ["sst@^2", "aws-cdk-lib@2.171.1", "constructs@10.3.0"],
    dev: true,
  }),
];
