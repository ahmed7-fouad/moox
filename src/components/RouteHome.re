open BsReactNative;

let styles =
  StyleSheet.create(
    Style.{
      "title":
        style([
          fontSize(Float(36.)),
          fontWeight(`Bold),
          textAlign(Center),
          marginVertical(Pt(20.)),
          color(String("#030303")),
        ]),
      "links":
        style([
          flexDirection(Row),
          justifyContent(Center),
          alignItems(Center),
        ]),
    },
  );

let component = ReasonReact.statelessComponent("Home");

let make = (~posts) => {
  ...component,
  render: _self =>
    <AppWrapper>
      <Jumbotron />
      <Spacer />
      <Text style=styles##title> {"Latest Posts" |> R.string} </Text>
      <Background>
        {switch ((posts: T.contentList)) {
         | Inactive
         | Loading => <Text> {"Loading ..." |> R.string} </Text>
         | Errored => <Text> {"Oops" |> R.string} </Text>
         | Idle(posts) =>
           <View>
             <PostList posts=posts##list />
             <View style=styles##links>
               <TextLink href="/blog/"> {"More posts" |> R.string} </TextLink>
             </View>
           </View>
         }}
      </Background>
    </AppWrapper>,
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~posts=PhenomicPresetReactApp.jsEdge(jsProps##posts))
  );

let queries = _ => {
  let posts =
    PhenomicPresetReactApp.query(
      PaginatedList({
        path: "content/blog",
        by: Some("default"),
        value: None,
        order: None,
        sort: None,
        limit: Some(5),
        after: None,
      }),
    );
  {"posts": posts};
};
