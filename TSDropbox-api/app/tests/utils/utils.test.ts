import {pathToRoute, toMb} from '../../utils/utils';

describe('Number to mb', () => {
  test("819200 to mb", () => {
    expect(toMb(819200)).toBe("1 mb");
  });

  test("100 to mb", () => {
    expect(toMb(100)).toBe("0 mb");
  });

  test("819200 to mb", () => {
    expect(toMb(342234324)).toBe("417.77 mb");
  });
})

describe('Path', () => {
  test("path To Route", () => {
    expect(pathToRoute("/app/photo")).toBe("/dropbox/__app_photo");
  });
})



