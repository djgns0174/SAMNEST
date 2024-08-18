package com.example.samnest_back.travel_plan.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
public class DailyScheduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "travel_plan_id", insertable = false, updatable = false)
    private TravelPlanEntity travelPlan;

    @OneToMany(mappedBy = "dailySchedule", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TaskEntity> taskEntities;

    public void setDate(LocalDate date) {
        this.date = date;
    }
    public TravelPlanEntity getTravelPlanEntity() {
        return travelPlan;
    }

    public void setTravelPlanEntity(TravelPlanEntity travelPlanEntity) {
        this.travelPlan = travelPlanEntity;
    }
}
