import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
        return (
            <div className="categories">
                <ul>
                    <li
                        className={activeCategory === null ? 'active' : ''}
                        onClick={() => onClickCategory(null)}>Все</li>
                    {items && items.map((item, index) => (
                        <li
                            key={`${item}_${index}`}
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
);

Categories.propTypes = {
    activeCategory: PropTypes.oneOfType([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string),
    onClickCategory: PropTypes.func
};

Categories.defaultProps = { activeCategory: null, items: [] }

export default Categories;