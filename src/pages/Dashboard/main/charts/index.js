import React, {useEffect, useState} from 'react';
import CategoriesService from "../../../../services/Posts/categories.service";
import {Col, Row} from "react-bootstrap";
import UsersArticlesService from './../../../../services/Posts/users-articles.service';
import BarChartMain from "../../../../components/charts/bar";
import LineChartMain from "../../../../components/charts/line";
import Loading from "../../../../components/ui/loading";

const ChartsDashboard = () => {
    const [categories, setCategories] = useState([]);
    const [usersArticles, setUsersArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchCategory = async () => {
            await CategoriesService.fetchCategoryCount().then((response) => {
                setCategories(response.data)
                setLoading(false)
            })
        }
        const fetchUsersArticles = async () => {
            await UsersArticlesService.getCountArticles().then((response) => {
                setUsersArticles(response.data)
            })
        }
        fetchCategory();
        fetchUsersArticles()
    }, [])
    return (
        <>
            {
                loading
                    ?
                    <Loading/>
                    :
                    <Row className="pt-3">
                        <Col>
                            <BarChartMain categories={categories}/>
                        </Col>
                        <Col>
                            <LineChartMain userArticle={usersArticles}/>
                        </Col>
                    </Row>
            }
        </>
    );
};

export default ChartsDashboard;