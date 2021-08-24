import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import './../../../styles/react-bootstrap-table.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Loading from "./../../ui/loading";
import ModalUsersInfo from "../profile/ModalUserInfo";
import UsersArticlesService from './../../../services/Posts/users-articles.service';

const DatatableUsers = () => {
    const [users, setUsers] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [user, setUser] = useState(false);
    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Button variant="info"
                    onClick={() => {
                        setLoading(true)
                        setUser(true)
                        setUserInfo(row)
                        setModalShow(true)
                    }}
            >
                More
            </Button>
        );
    };
    const columns = [
        {
            dataField: 'id',
            text: '№',
        },
        {
            dataField: 'name',
            text: ' Name  ',
            filter: textFilter(),
        },
        {
            dataField: 'username',
            text: ' Username'
        },
        {
            dataField: 'email',
            text: ' Email',
        },
        {
            dataField: 'address',
            text: ' Address'
        },
        {
            dataField: 'profession',
            text: ' Profession'
        },
        {
            dataField: 'phone',
            text: 'Phone'
        },
        {
            dataField: 'article_count',
            text: 'Posts Count',
            sort: true

        },
        {
            dataField: 'link',
            text: 'More',
            formatter: linkFollow
        }
    ];
    const defaultSorted = [{
        dataField: 'name',
        order: 'asc'
    }];
    useEffect(() => {
        const fetchUsers = async () => {
            await UsersArticlesService.getCountArticles().then((response) => {
                setUsers(response.data)
                setLoading(false)
            })
        }
        fetchUsers()
    }, [])
    return (
        <>
            <Container fluid>
                {
                    loading
                        ?
                        <Loading/>
                        :
                        <BootstrapTable
                            classes="shadow-sm rounded container-fluid"
                            condensed
                            striped
                            hover
                            bordered
                            headerClasses="id"
                            keyField="id"
                            headerWrapperClasses="text-info"
                            columns={columns}
                            data={users}
                            filter={filterFactory()}
                            pagination={paginationFactory()}
                            defaultSorted={defaultSorted}
                        />

                }
            </Container>
            <Container>
                {
                    user
                        ?
                        <ModalUsersInfo
                            id={userInfo.id}
                            name={userInfo.name}
                            username={userInfo.username}
                            email={userInfo.email}
                            address={userInfo.address}
                            articles_length={userInfo.article_count}
                            created_at={userInfo.created_at}
                            phone={userInfo.phone}
                            profession={userInfo.profession}
                            onCloseInfoUser={setUser}
                            onCloseLoader={setLoading}
                            show={modalShow}
                            onHide={setModalShow}
                        />
                        :
                        null
                }
            </Container>
        </>
    );
};

export default DatatableUsers;