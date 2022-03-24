import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount,
        };
    }

    render() {
        return (
            <div>
                <div className="">Counter using class component</div>
                <button onClick={() => this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.changeCount(1)}>+</button>
            </div>
        );
    }

    changeCount(amount) {
        this.setState((prevState) => {
            return { count: prevState.count + amount };
        });
    }
}

/**
 * Get personalized items in checklist
 *
 * @return array
 */

//  public function getPersonalizedItems( int $userId ): array {
//     $defaultChecklistId = 1;
//     $personalizedChecklistItemTypes = [ ];

//     $checklistItemTypeMappingRepository = new ChecklistItemTypeMappingRepository( );
//     $checklistItemTypes = $checklistItemTypeMappingRepository->findByChecklistId( $defaultChecklistId );

//     foreach ( $checklistItemTypes as $checklistItemType ){
//         $personalizedChecklistItemTypes[ $checklistItemType[ 'item_key' ] ] = ChecklistItemType::{ $checklistItemType[ 'item_key' ] }( )->getValue( );
//     }
//     return $personalizedChecklistItemTypes;
// }

// ./private/vendor/bin/phinx create CreateChecklist
