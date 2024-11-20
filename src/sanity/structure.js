// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Images")
    .items([
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("vbImage").title("VBImage"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["category", "vbImage"].includes(item.getId())
      ),
    ]);
