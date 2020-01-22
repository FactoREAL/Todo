import * as React from "react";
import { connect } from "react-redux";

import AddGroup from "../components/AddGroup";
import { IRootState } from "../data/models";
import { addGroup, incGroupId } from "../data/actions";

type Props = InjectStateProps & InjectDispatchProps;

const AddGroupContainer: React.FC<Props> = ({
  nextGroupId,
  addGroup,
  incGroupId
}) => (
  <AddGroup
    nextGroupId={nextGroupId}
    onAddGroup={addGroup}
    onIncGroupId={incGroupId}
  />
);

const mapStateToProps = (state: IRootState) => ({
  nextGroupId: state.nextGroupId
});

const mapDispatchToProps = {
  addGroup,
  incGroupId
};
type InjectStateProps = ReturnType<typeof mapStateToProps>;
type InjectDispatchProps = typeof mapDispatchToProps;

export default connect<InjectStateProps, InjectDispatchProps, object>(
  mapStateToProps,
  mapDispatchToProps
)(AddGroupContainer);
